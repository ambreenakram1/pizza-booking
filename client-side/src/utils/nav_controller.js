export const navigateToScreen = (screen, args=null) => {
    console.log(screen);
    if (args !== null) {
        window.location = `/?screen=${screen}&${args}`;
    } else {
        window.location = `/?screen=${screen}`;
    }
}