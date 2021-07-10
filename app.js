// Variables
const customerInput = document.querySelector(".customer")
const courseInput = document.querySelector(".course");
const authorInput = document.querySelector(".author");
const formValues = document.querySelector(".submit");

// Event Listeners
formValues.addEventListener("click", submitValues);

// Functions
const courses = () => {
    const person = (customer, course, author) => { // FACTORY FUNCTION
        return {customer, course, author}
    }
    const customerInfo = person(`${customerInput.value}`,
     `${courseInput.value}`, `${authorInput.value}`)
    const formulate = () => {
        const div = document.createElement("div");
        document.querySelector(".contain-courses").appendChild(div)
        div.className = "card"
        const img = document.createElement("img");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const images = [
            "https://js-beginners.github.io/course-form-oop-project/img/cust-0.jpg",
            "https://js-beginners.github.io/course-form-oop-project/img/cust-4.jpg",
            "https://js-beginners.github.io/course-form-oop-project/img/cust-1.jpg",
            "https://js-beginners.github.io/course-form-oop-project/img/cust-2.jpg",
            "https://js-beginners.github.io/course-form-oop-project/img/cust-3.jpg"
        ];

        div.appendChild(img);
        img.className = "imgs"
        img.src = `${images[Math.floor(Math.random() * images.length)]}`
        div.appendChild(p1)
        p1.className = "name title"
        p1.innerText = `Name: ${customerInfo.customer}`;
        div.appendChild(p2)
        p2.className = "program title"
        p2.innerText = `Course: ${customerInfo.course}`;
        div.appendChild(p3)
        p3.className = "writer title"
        p3.innerText = `Author: ${customerInfo.author}`;
    }
    return {formulate, customerInfo, courses}  
}

function submitValues(item) {
    const addInto = courses();
    item.preventDefault();

    if (!(customerInput.value, courseInput.value, authorInput.value)) {
        return
    } else {
        addInto.formulate()
        customerInput.value = "";
        courseInput.value = "";
        authorInput.value = "";
    }
}
