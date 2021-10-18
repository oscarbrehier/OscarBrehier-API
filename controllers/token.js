import config from "../config.js";
import {code_401, code_400, code_202} from "../status.js";

export const token = async (req, res) => {

    if(!req.headers.token) {

        code_401(res).json({
            status: 401,
            message: 'No token provided'
        });

    } else if(req.headers.token !== config.token) {

        code_400(res).json({
            status: 400,
            message: 'Invalid token provided'
        });

    } else if(req.headers.token === config.token) {

        code_202(res).json({
            code: 202
        });

    };

}