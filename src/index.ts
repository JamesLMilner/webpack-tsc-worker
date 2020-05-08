import PrimeWorker from "worker-loader!./worker";

const worker = new PrimeWorker();

worker.postMessage({ limit: 1000 });
worker.onmessage = (event) => {
    document.getElementById("primes").innerHTML = event.data.primes;
};
