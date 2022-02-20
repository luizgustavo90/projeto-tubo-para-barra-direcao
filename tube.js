
function typepart()
{
         // tube parameters
         var matx = document.querySelector('input[name="tubetype"]:checked')
         let intern = document.querySelector('#intwall') 
         let extern = document.querySelector('#extwall')
        
        
        
         //part parameters
         let typex = document.querySelector('input[name="infotube"]:checked')
         let lenghtx = document.querySelector('#lenght')
        
        
              
         //divs
         let diva = document.getElementById('reta')
         let divb = document.getElementById('curva')



         if(typex.value === "straight")
         {
            diva.style.display ='block'
            respreta1.innerHTML = `Curve value: ${lenghtx.value/2} mm`
            respreta2.innerHTML = `Monst critical off-set: 3 mm`
            
         }

         else
         {
            divb.style.display ='block'
         }


}


 function checkpartCurved()
{
    
    
         // tube parameters
         var matx = document.querySelector('input[name="tubetype"]:checked')
         let intern = document.querySelector('#intwall') 
         let extern = document.querySelector('#extwall')
        
        
        
         //part parameters
         let typex = document.querySelector('input[name="infotube"]:checked')
         let lenghtx = document.querySelector('#lenght')
        
        
         //customer spec
         let specx = document.querySelector('#spec1')       
         let spec1 = specx.value
    
    let curvex = document.querySelector('#curve')
    let offx = document.querySelector('#offset')

    
    //res parameter

    let res = document.getElementById('res')

   


        let tube = {
                material: matx.value,
                internalWall: intern.value,
                externalWall: extern.value

        }

        let part = {
                type: typex.value,
                lenght: lenghtx.value,
                firstCurve: curvex.value,
                offset: offx.value

        }

     
   
    //general var's
    let inner = tube.externalWall-2 * tube.internalWall
    let lenght2 = part.lenght - part.firstCurve
    let fa = ((Math.PI)*(Math.pow(tube.externalWall,2))/4)
    let fi = ((Math.PI)*(Math.pow(inner,2)/4))
    let cross_sec = fa - fi
    let sec_mode = ((Math.PI)/32)*(Math.pow(tube.externalWall,4)-Math.pow(inner,4))/tube.externalWall
    let inertia = ((Math.PI)/64)*(Math.pow(tube.externalWall,4)-Math.pow(inner,4))
    let toinput = (tube.material*part.firstCurve*lenght2)/(3*210000*inertia)
    //calculated
    const x1 = 1/cross_sec
    const x2 = x1-toinput
    const x3 = x2*sec_mode
    const x4 = parseFloat(part.offset) + x3
    const calculated = x4/2

    //solutions
    let y = Math.pow(calculated,2)
    let y2 =sec_mode*toinput*parseFloat(part.offset)
    let y3 = y+y2
    let solut = Math.sqrt(y3)

    let f = -calculated + solut

    //t3
    let z = parseFloat(part.offset)+f
    let z2 = 1/cross_sec
    let z3 = z/sec_mode
    let t3 = z3+z2

    let buck = (tube.material/t3)/1000


    if(buck >= spec1)
    {
        res.style.display ='block'
        res.innerHTML = `Buckling Load value: ${buck.toFixed(2)} kN 
                        <br> Customer Specification: ${spec1} kN
                        <br>
                        <br> Tube is Approved!
                        <br>
                        <img src="Imagens/approved_450.PNG" alt="approved">
                        <br>
                        <br>
                        Advanced info:
                        <br>
                        <br>lenght 2:     ${lenght2.toFixed(2)}mm
                        <br>Fa:     ${fa.toFixed(2)}mm²
                        <br>Fi:     ${fi.toFixed(2)}mm²
                        <br>Cross section area:     A ${cross_sec.toFixed(2)}
                        <br>Section modules:     W ${sec_mode.toFixed(2)}
                        <br>Inertia moment:     I ${ inertia.toFixed(2)}
                        <br>
                        <br>To Input:     K ${toinput}
                        <br>Calculated:     t1 ${calculated}
                        <br>Solutions:     t2 ${solut}
                        <br>f ${f}
                        <br>t3 ${t3}                     
                        `

    }
    else
    {
        res.style.display ='block'
        res.innerHTML = `Buckling Load value: ${buck.toFixed(2)} kN
                        <br> Customer Specification: ${spec1} kN
                        <br>
                        <br> Tube is Reproved!
                        <br>
                        <img src="Imagens/rejected_450.PNG" alt="rejected">
                        <br>
                        <br>
                        Advanced info:
                        <br>
                        <br>lenght 2:     ${lenght2.toFixed(2)}mm
                        <br>Fa:     ${fa.toFixed(2)}mm²
                        <br>Fi:     ${fi.toFixed(2)}mm²
                        <br>Cross section area:     A ${cross_sec.toFixed(2)}
                        <br>Section modules:     W ${sec_mode.toFixed(2)}
                        <br>Inertia moment:     I ${ inertia.toFixed(2)}
                        <br>
                        <br>To Input:     K ${toinput}
                        <br>Calculated:     t1 ${calculated}
                        <br>Solutions:     t2 ${solut}
                        <br>f ${f}
                        <br>t3 ${t3}                     
                        `
                        
    }

}  


function checkpartStraight()
{



         // tube parameters
         var matx = document.querySelector('input[name="tubetype"]:checked')
         let intern = document.querySelector('#intwall') 
         let extern = document.querySelector('#extwall')
        
        
        
         //part parameters
         let typex = document.querySelector('input[name="infotube"]:checked')
         let lenghtx = document.querySelector('#lenght')
        
        
         //customer spec
         let specx = document.querySelector('#spec')       
         let spec = specx.value
    //res parameter

    let res = document.getElementById('res')

   


        let tube1 = {
                material: matx.value,
                internalWall: intern.value,
                externalWall: extern.value

        }

        let part1 = {
                type: typex.value,
                lenght: lenghtx.value,
                firstCurve: ((lenghtx.value)/2),
                offset: 3

        }

     
   
    //general var's
    let inner = tube1.externalWall-2 * tube1.internalWall
    let lenght2 = part1.lenght - part1.firstCurve
    let fa = ((Math.PI)*(Math.pow(tube1.externalWall,2))/4)
    let fi = ((Math.PI)*(Math.pow(inner,2)/4))
    let cross_sec = fa - fi
    let sec_mode = ((Math.PI)/32)*(Math.pow(tube1.externalWall,4)-Math.pow(inner,4))/tube1.externalWall
    let inertia = ((Math.PI)/64)*(Math.pow(tube1.externalWall,4)-Math.pow(inner,4))
    let toinput = (tube1.material*part1.firstCurve*lenght2)/(3*210000*inertia)
    //calculated
    const x1 = 1/cross_sec
    const x2 = x1-toinput
    const x3 = x2*sec_mode
    const x4 = parseFloat(part1.offset) + x3
    const calculated = x4/2

    //solutions
    let y = Math.pow(calculated,2)
    let y2 =sec_mode*toinput*parseFloat(part1.offset)
    let y3 = y+y2
    let solut = Math.sqrt(y3)

    let f = -calculated + solut

    //t3
    let z = parseFloat(part1.offset)+f
    let z2 = 1/cross_sec
    let z3 = z/sec_mode
    let t3 = z3+z2

    let buck = (tube1.material/t3)/1000


    if(buck >= spec)
    {
        res.style.display ='block'
        res.innerHTML = `Buckling Load value: ${buck.toFixed(2)} kN 
                        <br> Customer Specification: ${spec} kN
                        <br>
                        <br> Tube is Approved!
                        <br>
                        <img src="Imagens/approved_450.PNG" alt="approved">
                        <br>
                        <br>
                        Advanced info:
                        <br>
                        <br>lenght 2:     ${lenght2.toFixed(2)}mm
                        <br>Fa:     ${fa.toFixed(2)}mm²
                        <br>Fi:     ${fi.toFixed(2)}mm²
                        <br>Cross section area:     A ${cross_sec.toFixed(2)}
                        <br>Section modules:     W ${sec_mode.toFixed(2)}
                        <br>Inertia moment:     I ${ inertia.toFixed(2)}
                        <br>
                        <br>To Input:     K ${toinput}
                        <br>Calculated:     t1 ${calculated}
                        <br>Solutions:     t2 ${solut}
                        <br>f ${f}
                        <br>t3 ${t3}                     
                        `
                        

    }
    else
    {
        res.style.display ='block'
        res.innerHTML = `Buckling Load value: ${buck.toFixed(2)} kN
                        <br> Customer Specification: ${spec} kN
                        <br>
                        <br> Tube is Reproved!
                        <br>
                        <img src="Imagens/rejected_450.PNG" alt="rejected">
                        <br>
                        <br>
                        Advanced info:
                        <br>
                        <br>lenght 2:     ${lenght2.toFixed(2)}mm
                        <br>Fa:     ${fa.toFixed(2)}mm²
                        <br>Fi:     ${fi.toFixed(2)}mm²
                        <br>Cross section area:     A ${cross_sec.toFixed(2)}
                        <br>Section modules:     W ${sec_mode.toFixed(2)}
                        <br>Inertia moment:     I ${ inertia.toFixed(2)}
                        <br>
                        <br>To Input:     K ${toinput}
                        <br>Calculated:     t1 ${calculated}
                        <br>Solutions:     t2 ${solut}
                        <br>f ${f}
                        <br>t3 ${t3}                     
                        `
    }

}  