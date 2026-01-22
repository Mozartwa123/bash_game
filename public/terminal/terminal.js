import parseAndRun from "./parse.js"

const Terminal = {
    terminal : null,
    activeinput : null,

    init(terminalId){
        this.terminal = document.getElementById(terminalId);

        this.terminal.addEventListener("click", () => {
            if (this.activeInput) {
                this.activeInput.focus();
            }
        });

        this.newLine();
    },

    newOutput(content){
        const output = document.createElement("div");
        output.innerHTML = content;
        output.classList.add("output");
        this.terminal.appendChild(output);
    },

    clear(){
        this.terminal.innerHTML = "";
    },

    newLine(){
        const commandline = document.createElement("div");
        const template = document.getElementById("prompt-template");
        commandline.classList.add("line");
        commandline.innerHTML = template.innerHTML;
        this.terminal.appendChild(commandline);
        this.activeInput = commandline.querySelector(".prompt-input");
        this.activeInput.focus();
        this.activeInput.addEventListener("keydown", this.enterEvent.bind(this));
    },

    enterEvent(e){
        if(e.key === "Enter"){
            e.preventDefault();
            console.log(this.activeInput.textContent.trim());
            const res = parseAndRun(this.activeInput.textContent.trim(), {
                terminal : this
            });
            if (res.output){
                this.newOutput(res.output);
            }
            this.blockLine();
            this.newLine();
        }
    },

    blockLine(){
        if(this.activeInput){
            this.activeInput.contentEditable = false;
        }
    }

}

window.Terminal = Terminal;
