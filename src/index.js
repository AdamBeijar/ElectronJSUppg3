const electron = require("electron")

// Instance Properties
process.noDeprecation = false;
process.throwDeprecation = false;
process.traceDeprecation = true;
process.traceProcessWarnings = true;
// Instance Event
process.once('loaded', () => {
    console.log('Pre-Initialization Complete');
});
function properties(label, value) {
    this.label = label;
    this.value = value;
}
var props = {};
var print = document.getElementById('print');
// Instance Properties, continued ...
print.addEventListener('click', (event) => {
    props.defaultApp = new properties('Default App', process.defaultApp);
    props.mainFrame = new properties('Main Frame', process.isMainFrame);
    props.resourcePath = new properties('Resource Path', process.resourcesPath);
    props.sandbox = new properties('Sandbox Environment', process.sandboxed);
    props.processType = new properties('Type of Process', process.type);
    props.chrome = new properties('Chrome Version', process.versions.chrome);
    props.electron = new properties('Electron Version', process.versions.electron);
    props.windowsStore = new properties('Window Store', process.windowsStore);
    props.CreationTime = new properties('Window Store', process.getCreationTime());
    console.table(props)
    // Instance Methods
    console.log('-------------------');
    console.log('Application Creation Time');
    console.log(process.getCreationTime());
    console.log('-------------------');
    console.log('CPU Usage Information')
    console.log(process.getCPUUsage());
    console.log('-------------------');
    console.log('IOCounters Information')
    console.log(process.getIOCounters());
    console.log('-------------------');
    console.log('Heap Statistics Information')
    console.log(process.getHeapStatistics());
    console.log('-------------------');
    console.log('Blink Memory Information')
    console.log(process.getBlinkMemoryInfo());
    console.log('-------------------');
    console.log('System Memory Information')
    console.log(process.getSystemMemoryInfo());
    console.log('-------------------');
    console.log('System Versions Information')
    console.log(process.getSystemVersion());
    console.log('-------------------');
    console.log('Process Memory Information')
    process.getProcessMemoryInfo().then(processMemoryInfo => {
        console.log(processMemoryInfo);
    }).catch(err => {
        console.log(err);
    })
});