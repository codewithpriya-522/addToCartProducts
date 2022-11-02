let PreviewContainer=document.querySelector('.products-preview')
let previewBox=PreviewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product=>{
    product.onClick=()=>{
        PreviewContainer.style.display='flex';
        let name=product.getAttribute('data-name');
        previewBox.forEach(preview=>{
            let target=preview.getAttribute('data-target');
            if(name==target)
            {
                preview.classList.add('active')
            }
        })
    }
})

const onClickModal=()=>{
    var contr = document.getElementById("model")
    contr.style.display='block'
}