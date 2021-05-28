const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data,callBack, falseCallBack) => {
 const request = new XMLHttpRequest();
 request.open('POST', server);

 request.addEventListener('readystatechange', () => {
    if(request.readyState !== 4) return;
    if(request.status === 200 || request.status === 201) {
        const response = JSON.parse(request.responseText);
        callBack(response.id);
 } else {
     falseCallBack(request.status)
    throw new Error(request.status)
 }
    
 });



 request.send(data)

};

const forlmElems = document.querySelectorAll('.form');
 
const formHandler = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
      const data = {};
      for(const {name, value} of form.elements) {
          if(name) {
              data[name] = value
          }
      }

   const smallEl = document.createElement('small');
      
sendData(JSON.stringify(data), 
(id) => {
smallEl.textContent = ('Ваша заявка N:'  + id + '\n В ближайшее время с вами свяжемся')
 smallEl.style.color ='green';
 form.append(smallEl);
},
(err) => {
    smallEl.textContent =("Неполадки - попробуйте зайти позже")
    smallEl.style.color ='red';
    form.append(smallEl);
 });

 form.reset();

    })
}

forlmElems.forEach(formHandler)

// const dataTest = {
//     name: 'Yar',
//     tel: '8999100100'
// }

// sendData(JSON.stringify(dataTest), 
// (id) => {
// alert('Ваша заявка N:'  + id + '\n В ближайшее время с вами свяжемся')
// console.log(id)
// },
// (err) => {
//  alert("Неполадки - попробуйте зайти позже")
//  });