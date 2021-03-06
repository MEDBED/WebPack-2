import {secretButton,secretParagraph} from './domLoader';

var showSecret = false;

secretButton.addEventListener('click',toggleSecretState);
updateSecretParagraph();

function toggleSecretState(){
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton();
}

function updateSecretButton(){
    if(showSecret){
        secretButton.textContext = 'Hide The Secret';
    }else{
        secretButton.textContext = 'Show The Secret';
    }
}

function updateSecretParagraph(){
    if(showSecret){
        secretParagraph.style.display = 'block';
    }else{
        secretParagraph.style.display = 'none';
    }

}