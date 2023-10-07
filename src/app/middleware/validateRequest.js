const validateRequest = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
                cookies: req.cookies,
                headers: req.headers,
            });

            return next();
        } catch (error) {
            if (error instanceof Error) {
                // Handle validation errors
                const formattedError = {
                    error: 'Validation Error',
                    details: error.message,
                };
                return res.status(400).json(formattedError);
            } else {
                // Handle other types of errors (e.g., unexpected errors)
                const formattedError = {
                    error: 'Internal Server Error',
                    details: 'An unexpected error occurred.',
                };
                return res.status(500).json(formattedError);
            }
        }
    };
};

export default validateRequest;
