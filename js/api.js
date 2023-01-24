async function getApi() {
    const response = await fetch('https://github.com/gorinichvisuals/photographer-service-API');
    data = await response.json();

    console.log(data);
}