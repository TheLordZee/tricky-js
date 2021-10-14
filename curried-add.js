function curriedAdd(num) {
    let total = 0;
    function adder(n){
        if(n){
            total += n;
            return adder;
        }else{
            return total;
        }
    }
    if(num){
        total += num;
        return adder;
    }else{
        return total;
    }
}

module.exports = { curriedAdd };
