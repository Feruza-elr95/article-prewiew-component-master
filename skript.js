
document.getElementById("share-icon").addEventListener('click', function (){
    document.querySelector('.share-section').style.display="flex";
    document.getElementById("close-button").style.display='inline-block';
    document.getElementById('share-icon').style.display='none';
});

function init(){
    document.querySelector('.share-section').style.display="none";
    document.getElementById("share-icon").style.display="inline-block";
    document.getElementById("close-button").style.display='none';
};

document.getElementById("close-button").addEventListener('click', init);
    

