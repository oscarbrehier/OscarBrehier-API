import {code_400, code_401} from "../status.js";

export default function token(req, res) {

    try {

        if(!req.headers.token) {

            code_401(res).json({
                status: 401,
                message: 'No token provided'
            });

            return false;

        } else if(req.headers.token !== process.env.token) {

            code_400(res).json({
                status: 400,
                message: 'Invalid token provided'
            });

            return false

        } else {

            return true;

        }

    } catch (err) {

        throw err;

    }

}