const schrollElem = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');

schrollElem.forEach(link => {
    link.addEventListener('click', (event) => {
        

        event.preventDefault()
        const id = link.getAttribute('href').substring(1)
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        })
    })
 
})