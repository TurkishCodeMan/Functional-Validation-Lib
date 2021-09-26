
const Validation = (run) => ({
    run,
    concat: (other) =>
        Validation((key, x) => run(key, x).concat(other.run(key, x)))
});


const isEmail = Validation((key, x) =>
    /@/.test(x)
        ? Successful(x)
        : Failed([`${key} needs to be email`])
);

const isPresent = Validation((key, x) =>
    !!x
        ? Successful(x)
        : Failed([`${key} needs to present`])
)

const Successful = (x) => ({
    x,
    isFail: false,
    fold: (f, g) => g(x),
    concat: other =>
        other.isFail ? other : Successful(x)
});

const Failed = (x) => ({
    x,
    isFail: true,
    fold: (f, g) => f(x),
    concat: other =>
        other.isFail ? Failed(x.concat(other.x)) : Failed(x)
});


const Validate = (valid, obj, run = () => { }) => {
    return Object.keys(valid)
        .map(key => valid[key].run(key, obj[key]))
        .map(run)
}


const flatterArray = (result) => {
    return typeof result.x == 'object'
        ? { x: result.x.join(' '), isFail: result.isFail }
        : { x: result.x, isFail: result.isFail }
}

const errorFinder = (result) => {
    return typeof result.x == 'object'
        ? result.isFail
        : result.isFail
}



export {
    Validate,
    flatterArray,
    errorFinder,
    isEmail,
    isPresent
}