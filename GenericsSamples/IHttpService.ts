import { IConfiguration } from "./IConfiguration";
import { IQueryParameter } from "./IQueryParameter";

export interface IHttpService
{
    Get<TOutput>(queryParameters: IQueryParameter[], config: IConfiguration): TOutput;  
    Post<TInput, TOutput>(data: TInput, config: IConfiguration): TOutput;  
}