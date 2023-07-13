const clock = () => {
        let hours = document.querySelector('#hr');
        let minutes = document.querySelector('#min');
        let seconds = document.querySelector('#sec');
        let ampm = document.querySelector('#ampm');

        let hr = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();
        let am = 'AM';
        if(hr > 12){
            hr = hr - 12;
            am='PM';
        }
        hr = (hr<10) ? '0'+hr : hr;
        min = (min<10) ? '0'+min : min;
        sec = (sec<10) ? '0'+sec : sec;

        hours.innerHTML=hr;
        minutes.innerHTML=min;
        seconds.innerHTML=sec;
        ampm.innerHTML = am;
    }
    setInterval(clock, 1000);