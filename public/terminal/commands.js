const commands = {
    "clear" : function(argv, context){
        const terminal = context.terminal;

        terminal.clear();
        return {
            output : ""
        };
    },
}

export default commands;