let paramsBuilder = (validParams,body) => {

    let params = {};

    validParams.forEach((attr) => {
        if(Object.prototype.hasOwnProperty.call(body,attr))
            if(attr == 'email')
            params[attr] = body[attr].toLowerCase();
            else
            params[attr] = body[attr];
    });

    return params;

}

module.exports = { paramsBuilder };
