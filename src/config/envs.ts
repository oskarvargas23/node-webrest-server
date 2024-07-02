import 'dotenv/config';
import {get} from 'env-var';


export const envs = {

    PORT: get('PORT').required().asPortNumber(),
    // PORT -> obtener puerto y es requerido, de tipo port number
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString(),
    // PUBLIC_PATH -> obtener path público y es opcional, de tipo string
}

