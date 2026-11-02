const preview=document.querySelector('dialog');
const caption=document.createElement('p');preview.append(caption);
document.querySelectorAll('[data-ai-image]').forEach(button=>{button.addEventListener('click',()=>{const img=preview.querySelector('img');img.src=button.dataset.aiImage;img.alt=button.querySelector('img').alt;caption.textContent=img.alt;preview.showModal();});});
preview.querySelector('button').addEventListener('click',()=>preview.close());
preview.addEventListener('click',event=>{if(event.target===preview)preview.close();});
