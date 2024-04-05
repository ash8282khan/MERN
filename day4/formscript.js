const firstnamechange = (e) => {
    const val = e.target.value;
    if (val.length > 3) {
        console.log("correct")
    }
}

function submitForm(e) {
    e.preventDefault();
    // console.log(e);
    const t = e.target
    const res={
        hobbies: [],
    };

    for (let i = 0; i < t.length; i++) {
        // console.dir(t[i].value);
        const ty = t[i].type;
        if(ty!='submit'){
        const nm = t[i].name;
        const v1 = t[i].value;
        console.log(nm, v1);

        if (ty == 'hobbies') {
            console.log(t[i].checked)
        }
        if (ty == 'hobbies' && t[i].checked) {
            res.hobbies.push(v1);
        }
        if (ty != 'hobbies') {
            res[nm]= v1;
        }

    }
    }

}