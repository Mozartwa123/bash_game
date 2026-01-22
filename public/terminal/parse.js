import commands from "./commands.js"

const simpleTokenizer = s => s.trim().split(/\s+/)
const exec = ([cmd, ...rest], context) => {
    const command =  commands[cmd];
    if (!command) {
        return {output: `command not found: ${cmd}`};
    }
    return commands[cmd](rest, context)
}

const parseAndRun = (s, context) =>{
    return exec(simpleTokenizer(s), context);
}

export default parseAndRun;