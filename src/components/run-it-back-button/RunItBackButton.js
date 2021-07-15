export default function RunItBackButton({ setShotData }) {

    function handleRunItBackClick() {

        let data = document.getElementById('file-upload');
        data = data.files[0];

        function readFileAsync(file) {
            return new Promise((resolve, reject) => {
                let reader = new FileReader();

                reader.onload = () => {
                    resolve(JSON.parse(reader.result));
                };

                reader.onerror = reject;

                reader.readAsText(file);
            })
        }

        async function processFile(data) {
            try {
                let contentBuffer = await readFileAsync(data);
                setShotData(contentBuffer);
            } catch (err) {
                console.log(err);
            }
        }

        processFile(data);
    }

    return (
        <label onChange={() => handleRunItBackClick()} htmlFor="file-upload" className="button" id="file-upload-button">
            <input id="file-upload" type="file" name="file-upload" />
            RunBack Your Data
        </label>
    )
}