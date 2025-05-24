class Kernal {
    #url;
    #method;
    #data;
    headerADDons = {};
    headers;
    constructor(url, method, data ) {
        this.url = url;
        this.method = method;
        this.data = data;
    }
    async RequestCall(url, method, data = null , headerADDons) {
        const csrfToken = document
            .querySelector('input[name="csrf-token"]')
            .getAttribute("value");
        if(typeof headerADDons === 'object' && headerADDons !== undefined && headerADDons !== null) {
             this.headers = headerADDons;
            console.warn("esX default header works perfectly with laravel , your headers applied " + headerADDons );
        }else{
            if(csrfToken !== undefined) {
                this.headers = {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                };
            }else{
                console.error("esX headers needs CSRF token in headers applied make sure to add input name of csrf-token and print csrf token inside");
            }
        }

        const options = {
            method: method,
            headers: this.headers,
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        try {
            const response = await fetch(url, options);

            // Check response status
            if (!response.ok) {
                const errorResponse = await response.json();

                // Check if errorResponse matches the expected format
                if (errorResponse && errorResponse.details && errorResponse.details.messages) {
                    const messages = errorResponse.details.messages;

                    // Log each error message
                    messages.forEach((message) => {
                        console.error(`Error: ${message}`);
                    });

                    // Throw specific error messages
                    throw new Error(messages.join(", "));
                } else {
                    // Handle generic errors
                    throw new Error(errorResponse.error || "An unknown error occurred.");
                }
            }

            // Parse and return the response result
            const result = await response.json();
            return result;

        } catch (error) {
            console.error('Request error:', error);

            // Additional processing for error messages
            if (error.message) {
                try {
                    const parsedError = JSON.parse(error.message);
                    throw parsedError;
                } catch (parseError) {
                    throw error;
                }
            }

            throw error;
        }
    }


}

export  {
    Kernal
};
