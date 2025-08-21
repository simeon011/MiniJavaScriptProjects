function solve(arr){
    let spell = arr.shift();
    let command = arr.shift();

    while (command !== 'End'){
        const tokens = command.split('!');
        const action = tokens.shift();

        if (action === 'RemoveEven'){
            let new_spell = '';
            for (let i = 0; i < spell.length; i+=2){
                let char = spell[i];
                new_spell += char;
            }
            spell = new_spell;
            console.log(spell);
        }
        else if (action === 'TakePart'){
            const fromIndex = Number(tokens.shift());
            const toIndex = Number(tokens.shift());
            const newSpell = spell.substring(fromIndex, toIndex);
            spell = newSpell;
            console.log(spell);
        }
        else if (action === 'Reverse'){
            const substring = tokens.shift();
            if (spell.includes(substring)){
                spell = spell.replace(substring, '');
                const reveres_spell = substring.split('').reverse().join('');
                spell += reveres_spell;
                console.log(spell);
            }
            else{
                console.log('Error');
            }
        }
        command = arr.shift();
    }
    console.log(`The concealed spell is: ${spell}`);
    
}

solve(["asAsl2adkda2mdaczsa",

"RemoveEven",

"TakePart!1!9",

"Reverse!maz",

"End"])