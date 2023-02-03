function myFirstApp(name, age) {
    alert(`Hello, my name is ${name} and this is my first app`);

    function showSkills() {
        let skills = ['html', 'css', 'js'];

        for(let i = 0; i < skills.length; i++) {
            alert(`I know ${skills[i]}`);
        }
    }

    showSkills();

    function checkAge() {
        if(age > 18) {
            alert('You have good chanses to become a developer')
        } else {
            alert('You are too young. Wait a little more')
        }
    }

    checkAge();

    function calcPow(num) {
        return num * num;
    }

    alert('4 in power of 2 is equal: ' + calcPow(4))
}

myFirstApp('Pavel', 37);