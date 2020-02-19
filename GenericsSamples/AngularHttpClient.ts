import { IHttpService } from "./IHttpService";
import { IQueryParameter } from "./IQueryParameter";
import { IConfiguration } from "./IConfiguration";
import { HttpClient } from "./HttpClient";

export class AngularHttpClient implements IHttpService{

    constructor(httpClient: HttpClient){ 

    }
    
    Get<TOutput>(queryParameters: IQueryParameter[], config: IConfiguration): TOutput{
        return null; 
    }

    Post<TInput, TOutput>(data: TInput, config: IConfiguration): TOutput{
        return null;
    }
}