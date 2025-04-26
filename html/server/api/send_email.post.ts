import { defineEventHandler, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const webhookUrl = config.webhookUrl;
    const body = await readBody(event);

    // Honeypot check
    if (body.fax) {
        console.warn('Honeypot triggered');
        throw createError({
            statusCode: 400,
            statusMessage: 'Bad Request'
        });
    }

    try {
        const response = await $fetch(webhookUrl, {
            method: 'POST',
            body: {
                name: body.name,
                email: body.email,
                phone: body.phone,
                message: body.message,
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        return { statusCode: 200, statusMessage: 'OK', message: 'Email sent successfully' }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
            message: error.message || 'Failed to send email'
        });
    }
})