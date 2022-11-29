const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // Line below takes the form data from the HTML page and we have to make sure that 
    // the name tags are filled in the HTML elements otherwise we will not get proper key pair values
    // when the data is transformed
    const cdoptData = new FormData(form);
    // The linke below transforms the data into data with Key value pairs
    const cdoptDataransformed = Object.fromEntries(cdoptData);

     // Picking out the SUVAT values from the transformed data 
     const A = parseFloat(cdoptDataransformed['A']);
     const a = parseFloat(cdoptDataransformed['a']);
     const b = parseFloat(cdoptDataransformed['b']);
     const p1 = parseFloat(cdoptDataransformed['p1']);
     const p2 = parseFloat(cdoptDataransformed['p2']);
     const m = parseFloat(cdoptDataransformed['m']);
     const xstar = ((a/(p1)) / (b/(p2) )) *  ((m/p2)/ (  1 + (a / b) )) ;
     const ystar = (m/p2)/ (  1 + (a / b) );

    //  Any imtermediate constants

    if ( (p1>0) || (p2>0) || (m>0) ) {
        document.querySelector(".answer").innerText = `
        The equations are:
        ${A} * x^${a} * y^${b} 
        ${p1}x +${p2}y = ${m}
        or 
        ${m} - (${p1}x +${p2}y) = 0

        The Lagrangian is:

        L =  ${A} * x^${a} * y^${b} + lambda( ${m} - (${p1}x +${p2}y) )
        L =  ${A} * x^${a} * y^${b} + lambda( ${m} - (${p1}x +${p2}y) )
        L =  ${A} * x^${a} * y^${b} + lambda( ${m} - (${p1}x +${p2}y) )
        
        Nb L(i) means partially differentiate L with respect to i.
        The first order conditions are as follows:

        L(x) =  ${A*a} * x^${a-1} * y^${b} - lambda(${p1}) = 0    (Equation A)
        L(y) =  ${A*b} * x^${a} * y^${b-1} - lambda(${p2} ) = 0   (Equation B)
        L(lambda) =   lambda( ${m} - (${p1}x +${p2}y) ) = 0       
        lambda( ${m} - (${p1}x +${p2}y) ) = 0                     
         ${m} - (${p1}x +${p2}y)  = 0                       
         ${m} - ${p1}x -${p2}y  = 0 
         ${p2}y = ${m} - ${p1}x 
         y = ${m/p2}  -${p1/p2}x                                  (Equation C)

        Solving (Equation A) for lambda gives:

        ${A*a} * x^${a-1} * y^${b} - (${p1})lambda = 0
        ${A*a} * x^${a-1} * y^${b} = (${p1}) lambda
        lambda  = ${A*a/(p1)} * x^${a-1} * y^${b}               (Equation D)

        Solving (Equation B) for lambda gives:

        ${A*b} * x^${a} * y^${b-1} - (${p2})lambda = 0
        ${A*b} * x^${a} * y^${b-1} = (${p2})lambda
        lambda = ${A*b/(p2)} * x^${a} * y^${b-1}                (Equation E)

        Equating Equation D and E gives:

        ${A*a/(p1)} * x^${a-1} * y^${b} = ${A*b/(p2)} * x^${a} * y^${b-1} 

        dividing both sides by ${A} gives:

        ${a/(p1)} * x^${a-1} * y^${b} = ${b/(p2)} * x^${a} * y^${b-1} 

        dividing both sides by x^${a-1} gives:

        ${a/(p1)}  * y^${b} = ${b/(p2)} * x^${a- (a - 1)} * y^${b-1} 

        dividing both sides by y^${b-1} gives:

        ${a/(p1)}  * y^${b - (b-1)} = ${b/(p2)} * x^${a- (a - 1)} 
        ${a/(p1)}  * y = ${b/(p2)} * x 

        Dividing by  ${b/(p2)} gives:

        x = ${(a/(p1)) / (b/(p2) ) }y                           (Eqution F)

        Using Equation C and Equation F (ie subing in Equation F into Equation C) gives:

        y = ${m/p2}  -${p1/p2} ( ${(a*p2) / (b*p1) }y  )
        y = ${m/p2}  -( ${a / b }y  )
        (1+${a / b }) y = ${m/p2} 
        ${1 + (a / b) } y = ${m/p2}
        y =  ${(m/p2)/ (  1 + (a / b) )}

        using this value of y along with Equation F we get:

        x = ${(a/(p1)) / (b/(p2) ) } * ${(m/p2)/ (  1 + (a / b) )}
        x = ${ ((a/(p1)) / (b/(p2) )) *  ((m/p2)/ (  1 + (a / b) )) }

        The value of lambda can be found using either Equation A or B, here we use Equation A a;ong with the x and y values found before:

        ${A*a} * x^${a-1} * y^${b} - lambda(${p1}) = 0
        ${p1}lambda = ${A*a} * x^${a-1} * y^${b}
        ${p1}lambda = ${A*a} * ${xstar}^${a-1} * ${ystar}^${b}
        lambda = ${(A*a)/p1} * ${xstar}^${a-1} * ${ystar}^${b} 
        lambda = ${(A*a)/p1} * ${Math.pow(xstar,(a-1))} * ${Math.pow(ystar,(b))}
        lambda = ${ ((A*a)/p1) * (Math.pow(xstar,(a-1))) * (Math.pow(ystar,(b)))}
        `
    } else {
        document.querySelector(".errorhanger").innerText = `Please inset appropiate values for the constants`
    }
})