class message{
   static  i = 0;
    constructor(){
        const containerId = 'message-container'
        this.containerEl =  document.getElementById(containerId);
        if(!this.containerEl){
            this.containerEl =  document.createElement("div");
            this.containerEl.id = containerId;
            document.body.appendChild(this.containerEl)
        }

    }

     show({ type = 'info', text = '',duration = 2000 }) {
   
       this.messageEl = document.createElement("div");
       this.messageEl.className = 'message move-in';

       this.messageEl.innerHTML = `
       <span class="type iconfont icon-${type}"></span>
       <div class="text">${text}</div>`;
       this.containerEl.appendChild(this.messageEl);
       setTimeout(()=>{
        this.messageEl.className= this.messageEl.className.replace('move-in','')
        this.messageEl.className += 'move-out'
        this.messageEl.addEventListener('animationend',()=>{
            console.log("class",this.messageEl.className)
             this.messageEl.remove();
        })
       },duration);

     // 是否展示关闭按钮
     if (true) {
        // 创建一个关闭按钮
        let closeEl = document.createElement('div');
        closeEl.className = 'iconfont icon icon-close';
        // 把关闭按钮追加到message元素末尾
        this.messageEl.appendChild(closeEl);

        // 监听关闭按钮的click事件，触发后将调用我们的close方法
        // 我们把刚才写的移除消息封装为一个close方法
        closeEl.addEventListener('click', () => {
            this.close(this.messageEl)
        });
    }

    };
    close(messageEl){
        console.log("close===>")
         // 首先把move-in这个弹出动画类给移除掉，要不然会有问题，可以自己测试下
         messageEl.className = messageEl.className.replace('move-in', '');
         // 增加一个move-out类
         messageEl.className += 'move-out';
 
         // 这个地方是监听动画结束事件，在动画结束后把消息从dom树中移除。
         // 如果你是在增加move-out后直接调用messageEl.remove，那么你不会看到任何动画效果
         messageEl.addEventListener('animation', () => {
             // Element对象内部有一个remove方法，调用之后可以将该元素从dom树种移除！
             console.log('12234213')
             messageEl.remove();
         });
     };

     success({text,duration = 5000}){
        this.show({type:'success',text,duration})
     };
     error(text,duration = 5000){
        this.show({type:'error',text,duration})
     };
     warning(text,duration = 5000){
        this.show({type:'warning',text,duration})
     }

}
// let meg = new message()
export default message