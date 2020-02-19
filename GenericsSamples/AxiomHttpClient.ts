import { IHttpService } from "./IHttpService";
import { IQueryParameter } from "./IQueryParameter";
import { IConfiguration } from "./IConfiguration";
import { AHttpClient } from "./AHttpClient";

export class AxiomHttpClient implements IHttpService{

    constructor(httpClient: AHttpClient){ 

    }
    
    Get<TOutput>(queryParameters: IQueryParameter[], config: IConfiguration): TOutput{
        return null; 
    }

    Post<TInput, TOutput>(data: TInput, config: IConfiguration): TOutput{
        return null;
    }
}