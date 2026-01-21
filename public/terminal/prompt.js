class Prompt {
    constructor({
        username,
        usercolor,
        machinename,
        monkeycolor,
        machinecolor,
        promptsign,
        promptcolor,
        id
    } = {}) {
        Object.assign(this, {
            username,
            usercolor,
            machinename,
            monkeycolor,
            machinecolor,
            promptsign,
            promptcolor
        })
        this.id = id == null ? Math.floor(Math.random() * 1000000000) : id
        this.font = "monospace"
        this.htmlUserId = `username${this.id}`
        this.htmlMachineId = `machinename${this.id}`
        this.htmlPromptId = `promptsign${this.id}`
        this.htmlMonkeyId = `monkey${this.id}`
        this.htmlTerminalId = `terminal${this.id}`
        // this.htmlLineId = `line${this.id}`
        this.htmlOutputId = `output${this.id}`
        this.htmlPrompt = null
    }

    setStyle(element) {
        element.style.setProperty("--user-color", this.usercolor);
        element.style.setProperty("--mashine-color", this.mashinecolor);
        element.style.setProperty("--prompt-color", this.promptcolor);
    }

    genSingleStyle(spanid, spancolor) {
        return `
        #${spanid}{
            font: ${this.font};
            color: ${spancolor};
        }`
    }

    genStyle() {
        return `
        ${this.genSingleStyle(this.htmlUserId, this.usercolor)}
        ${this.genSingleStyle(this.htmlMachineId, this.machinecolor)}
        ${this.genSingleStyle(this.htmlMonkeyId, this.monkeycolor)}
        ${this.genSingleStyle(this.htmlPromptId, this.promptcolor)}
        .terminal {
            font-family: ${this.font};
            }
        
        `
    }

    genSpan(spanid, spancontent){
        return `<span id = ${spanid}>
            ${spancontent}
        </span>`
    }

    genPrompt() {
        if(this.htmlPrompt === null){
         const htmlInputId = `input${this.id}`
          const htmlOutputId = `output${this.id}`
        this.htmlPrompt = `
        ${this.genSpan(this.htmlUserId, this.username)}
        ${this.genSpan(this.htmlMonkeyId, "@")}
        ${this.genSpan(this.htmlMachineId, this.machinename)}
        ${this.genSpan(this.htmlPromptId, this.promptsign)}
         <span id="${htmlInputId}" class="prompt-input" contenteditable="true"></span>`
        return this.htmlPrompt;
        } else {
            return this.htmlPrompt;
        }
    }
}

module.exports = Prompt