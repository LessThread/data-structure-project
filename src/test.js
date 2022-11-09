import fs from 'fs';

function getC(path)
{
    return fs.readFileSync(path).toString();
}

function getP(path)
{
    return fs.readFileSync(path).toString().split("\n");;
}

function getS(path)
{
    return fs.readFileSync(path).toString().split("\n");;
}

function getW(path)
{
    return fs.readFileSync(path).toString().split("\n");;
}

export {
    getC,
    getP,
    getS,
    getW
};