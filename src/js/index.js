import firebase from '../firebase/firebase';

const productName = document.getElementById('productName');
const productQuantity = document.getElementById('productQuantity');
const radioCheckboxesToCheck = document.querySelectorAll('.radioCheckboxes');
const shoppingForm = document.querySelector('.form_positioner');
const vegetableList = document.querySelector('.vegetableList');
const fruitList = document.querySelector('.fruitList');
const breadList = document.querySelector('.breadtList');
const diaryList = document.querySelector('.diaryList');
const meatList = document.querySelector('.meatList');
const otherList = document.querySelector('.otherList');
const numberOfThings = document.querySelector('.numberOfThings');

const ListRender = () => {
  firebase
    .firestore()
    .collection('listElements')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.data().productType === 'vegetables') {
          const listElement = document.createElement('p');
          listElement.classList.add('listElementStyle');
          vegetableList.appendChild(listElement);
          listElement.innerHTML = `${doc.data().productName} ${doc.data().productQuantity} ${
            doc.data().productConvert
          }`;
          listElement.addEventListener('click', (event) => {
            event.preventDefault();
            firebase
              .firestore()
              .collection('listElements')
              .doc(`${doc.id}`)
              .delete()
              .then(() => {
                window.location.reload();
              });
          });
        } else if (doc.data().productType === 'fruits') {
          const listElement = document.createElement('p');
          listElement.classList.add('listElementStyle');
          fruitList.appendChild(listElement);
          listElement.innerHTML = `${doc.data().productName} ${doc.data().productQuantity} ${
            doc.data().productConvert
          }`;
          listElement.addEventListener('click', (event) => {
            event.preventDefault();
            firebase
              .firestore()
              .collection('listElements')
              .doc(`${doc.id}`)
              .delete()
              .then(() => {
                window.location.reload();
              });
          });
        } else if (doc.data().productType === 'bread') {
          const listElement = document.createElement('p');
          listElement.classList.add('listElementStyle');
          breadList.appendChild(listElement);
          listElement.innerHTML = `${doc.data().productName} ${doc.data().productQuantity} ${
            doc.data().productConvert
          }`;
          listElement.addEventListener('click', (event) => {
            event.preventDefault();
            firebase
              .firestore()
              .collection('listElements')
              .doc(`${doc.id}`)
              .delete()
              .then(() => {
                window.location.reload();
              });
          });
        } else if (doc.data().productType === 'dairy') {
          const listElement = document.createElement('p');
          listElement.classList.add('listElementStyle');
          diaryList.appendChild(listElement);
          listElement.innerHTML = `${doc.data().productName} ${doc.data().productQuantity} ${
            doc.data().productConvert
          }`;
          listElement.addEventListener('click', (event) => {
            event.preventDefault();
            firebase
              .firestore()
              .collection('listElements')
              .doc(`${doc.id}`)
              .delete()
              .then(() => {
                window.location.reload();
              });
          });
        } else if (doc.data().productType === 'meat') {
          const listElement = document.createElement('p');
          listElement.classList.add('listElementStyle');
          meatList.appendChild(listElement);
          listElement.innerHTML = `${doc.data().productName} ${doc.data().productQuantity} ${
            doc.data().productConvert
          }`;
          listElement.addEventListener('click', (event) => {
            event.preventDefault();
            firebase
              .firestore()
              .collection('listElements')
              .doc(`${doc.id}`)
              .delete()
              .then(() => {
                window.location.reload();
              });
          });
        } else if (doc.data().productType === 'other') {
          const listElement = document.createElement('p');
          listElement.classList.add('listElementStyle');
          otherList.appendChild(listElement);
          listElement.innerHTML = `${doc.data().productName} ${doc.data().productQuantity} ${
            doc.data().productConvert
          }`;
          listElement.addEventListener('click', (event) => {
            event.preventDefault();
            firebase
              .firestore()
              .collection('listElements')
              .doc(`${doc.id}`)
              .delete()
              .then(() => {
                window.location.reload();
              });
          });
        }
      });
      numberOfThings.innerHTML = snapshot.docs.length;
    });
};
ListRender();

shoppingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const arr = [];
  arr.push(productName.value);
  arr.push(productQuantity.value);

  radioCheckboxesToCheck.forEach((element) => {
    if (element.checked === true) {
      arr.push(element.value);
    }
  });
  const selectedOptions = document.querySelectorAll('.selectOptions');
  selectedOptions.forEach((element) => {
    if (element.selected === true) {
      arr.push(element.value);
    }
  });
  firebase.firestore().collection('listElements').add({
    productName: arr[0],
    productQuantity: arr[1],
    productConvert: arr[2],
    productType: arr[3],
  });
  shoppingForm.reset();
  setTimeout(() => {
    window.location.reload();
  }, 1000);
});
