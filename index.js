import * as core from "@actions/core";
import * as github from "@actions/github";

try{
    const input1 = core.getInput("input1");
    core.info('Input passed: '+input1);
    const time = new Date().toTimeString();
    core.setOutput("time",time);

    const payload = JSON.stringify(github.context.payload, undefined,2);
    core.info('The event payload: '+payload);
}catch(err){
    core.setFailed(err.message);
}