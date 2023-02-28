function ratio() {
	let num1 = prompt("Enter the number:")
	let num2 = prompt("Enter the number:")
	let z = num1/num2
 	console.log(z)
 }

function greatest3(x, y ,z){
	const three = [x, y, z]
    let big = 0
    let i = 0
    while (i < 3){
    	let num = prompt("Enter three numbers:")
    	three[i] = num
	    if (three[i] > big){
		    big = three[i]
	    }
	    i += 1
    }	
    console.log(big)
} 

function greeting(){
	const name = prompt("What is your name?")
	console.log("hello", name)
}

greeting()
ratio()
greatest3()


