
// let week = JSON.parse(tasks);

// week.forEach(show => {
//     document.getElementById("result").innerHTML += 
//     `<div class="card">
//         <img src="${show.image}" class="card-img-top" alt="${show.taskName}">
//         <div class="card-body">
//             <h5 class="card-title">${show.day}</h5>
//             <p class="card-text">${show.taskName} day</p>
//             <p class="card-text">${show.description}</p>
//             <p class="card-text">Duration: ${show.duration}</p>
//             <p class="card-text">Location: ${show.location}</p>
//             <button class="btn btn-primary likeBtn">Importance: 
//             <span class="import">${show.importance}</span>
//             </button>
//         </div>
//     </div>`;
// });

// let buttons = document.querySelectorAll(".likeBtn");

// buttons.forEach((single,i) => {
//     single.addEventListener("click", function () {
//         incImp(i);
//     })
// });

// const filteredTasks = week.filter(task => task.importance < 6);


// function incImp(iBtn) {
//     week[iBtn].importance++;
// document.querySelectorAll(".import")[iBtn].innerText = week[iBtn].importance

// }

// document.getElementById("smt").addEventListener("click", function(){
//     let newFunc = week.sort((a, b) => b.importance - a.importance);
//     document.getElementById("result").innerHTML = "";
//     newFunc.forEach(show => {
//         document.getElementById("result").innerHTML += 
//         `<div class="card">
//             <img src="${show.image}" class="card-img-top" alt="${show.taskName}">
//             <div class="card-body">
//                 <h5 class="card-title">${show.day}</h5>
//                 <p class="card-text">${show.taskName} day</p>
//                 <p class="card-text">${show.description}</p>
//                 <p class="card-text">Duration: ${show.duration}</p>
//                 <p class="card-text">Location: ${show.location}</p>
//                 <button class="btn btn-primary likeBtn">Importance: 
//                 <span class="import">${show.importance}</span>
//                 </button>
//             </div>
//         </div>`;
//     });
// })


// I was not able to limit increasing the "importance" till 5 by clicking, 
// thats why I created a new code using renderTasks


let week = JSON.parse(tasks);
console.log(week)

// 3 function 

function getColorByImportance(importance) {
    if (importance === 0 || importance === 1) {
        return "green";
    } else if (importance === 2 || importance === 3) {
        return "yellow";
    } else {
        return "red";
    }
}

function renderTasks() {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";

    week.forEach((show, i) => {
        const color = getColorByImportance(show.importance);
        resultElement.innerHTML +=
            `<div>
                <div class="card shadow-lg p-3 mb-4 bg-body-tertiary rounded">
                    <img src="${show.image}" class="card-img-top" 
                    alt="${show.taskName}">
                    <div class="card-body " style="background-color: ${color}">
                        <h5 class="card-title">${show.day}</h5>
                        <p class="card-text">${show.taskName} day</p>
                        <p class="card-text">${show.description}</p>
                        <p class="card-text">Duration: ${show.duration}</p>
                        <p class="card-text">Location: ${show.location}</p>
                        <button class="btn btn-primary likeBtn">Importance: 
                            <span class="import">${show.importance}</span>
                        </button>
                    </div>
                </div>
            </div>
            `;
    });

    const buttons = document.querySelectorAll(".likeBtn");

// 1 function

    buttons.forEach((single, i) => {
        single.addEventListener("click", function () {
            incImp(i);
        });
    });
}

// 2 function

function incImp(iBtn) {
    if (week[iBtn].importance < 5) {
        week[iBtn].importance++;
        renderTasks();
    }
}

// 4 function

document.getElementById("smt").addEventListener("click", function () {
    week.sort((a, b) => a.importance - b.importance);
    renderTasks();
});

renderTasks();





  