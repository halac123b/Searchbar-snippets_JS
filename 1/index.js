let availableKeywords = [
    "HTML",
    "CSS",
    "Easy tutorials",
    "Web design tutorials",
    "Javascript",
    "Where to learn coding online",
    "Where to lern web design",
    "How to create a website"
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;

    if (input.length){  // If inputfield has value
        // Filter result contain inputfield
        result = availableKeywords.filter((keyword) => {
            return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        });
    }
    display(result);

    if (!result.length){
        resultBox.innerHTML = "";
    }
}

// Convert result to HTML format
function display(result){
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
}