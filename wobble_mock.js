function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    try {
        for (i = 0; i < 100; i++) {
            //console.log(i);
            console.log('node step:', i);
            await sleep(250);
        }
    } catch (e) {
        System.err.println("Not a valid input. Error :" + e.getMessage());
    }
    finally {
        console.log("node finished");
    }
}

main();