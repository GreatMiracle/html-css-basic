const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/', async (req, res) => {
    const userMessage = req.body.query;

    try {
        const response = await axios.post('https://dialogflow.googleapis.com/v2/projects/newagent-lrrd/agent/sessions/66771508:detectIntent', {
            queryInput: {
                text: {
                    text: userMessage,
                    languageCode: 'en'
                }
            }
        }, {
            headers: {
                Authorization: `Bearer YOUR_ACCESS_TOKEN`
            }
        });

        res.json({ fulfillmentText: response.data.queryResult.fulfillmentText });
    } catch (error) {
        console.error('Dialogflow API error:', error);
        res.status(500).json({ error: 'Failed to process request' });
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
