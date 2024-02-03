import { translate, getCurrentLocale } from "@src/core/I18n";
import axios from "axios";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";

import ConsoleColors from "./ConsoleColors";

const getLogMessage = (message: string) => `## HttpClient:: ${message}`;

const addHeaders = (config: InternalAxiosRequestConfig<any>) => {
  config.headers.Accept = "application/json";
  config.headers["Content-Type"] = "application/json";
  config.headers["Accept-Language"] = getCurrentLocale();
  config.headers["cache-control"] = "no-cache";
};

const getLogMethodColor = (method?: string) => {
  let methodColor: string | undefined;

  switch (method) {
    case "GET":
      methodColor = ConsoleColors.GET;
      break;
    case "HEAD":
      methodColor = ConsoleColors.HEAD;
      break;

    case "POST":
      methodColor = ConsoleColors.POST;
      break;

    case "PUT":
      methodColor = ConsoleColors.PUT;
      break;

    case "PATCH":
      methodColor = ConsoleColors.PATCH;
      break;

    case "DELETE":
      methodColor = ConsoleColors.DELETE;
      break;

    case "OPTIONS":
      methodColor = ConsoleColors.OPTIONS;
      break;

    default:
      methodColor = undefined;
      break;
  }

  return methodColor;
};

const requestFulfilledInterceptor = (
  config: InternalAxiosRequestConfig<any>,
) => {
  addHeaders(config);
  const method = config.method?.toUpperCase();
  const methodColor = getLogMethodColor(method);

  console.info(
    getLogMessage(`🚀 Sending %c${method}%c Request to %c${config.url}`),
    `color: ${methodColor}`,
    "color: undefined",
    `color: ${ConsoleColors.URL}`,
    config,
  );

  return config;
};

const requestRejectedInterceptor = (error: any) => {
  console.error(
    getLogMessage(
      `🚫 Error Sending Request to %c${error.response?.config?.url}`,
    ),
    `color: ${ConsoleColors.URL}`,
    error,
  );

  return Promise.reject(error);
};

const responseFulfilledInterceptor = (response: AxiosResponse<any, any>) => {
  console.info(
    getLogMessage(`✅ Got Response from %c${response.config.url}`),
    `color: ${ConsoleColors.URL}`,
    response,
  );

  return response;
};

const responseRejectedInterceptor = (error: any) => {
  console.error(
    getLogMessage(`❌ Got Error from %c${error.response?.config?.url}`),
    `color: ${ConsoleColors.URL}`,
    error,
  );

  return Promise.reject(error);
};

const httpClient = axios.create({
  baseURL: process.env.API_URL,
  timeout: 60 * 1 * 1000,
  timeoutErrorMessage: translate("network_error"),
});

httpClient.interceptors.request.use(
  requestFulfilledInterceptor,
  requestRejectedInterceptor,
);

httpClient.interceptors.response.use(
  responseFulfilledInterceptor,
  responseRejectedInterceptor,
);

export default httpClient;
