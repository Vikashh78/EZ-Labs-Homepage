{
	"info": {
		"_postman_id": "6afa2572-f1ca-4870-9dc0-1be91bae3911",
		"name": "EZ Labs Contsct Form",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "49921037",
		"_collection_link": "https://vikashh78-1020280.postman.co/workspace/6fd6764e-e304-4711-8cfa-c9a34372b57c/collection/49921037-6afa2572-f1ca-4870-9dc0-1be91bae3911?action=share&source=collection_link&creator=49921037"
	},
	"item": [
		{
			"name": "https://vernanbackend.ezlab.in/api/contact-us/",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"name\": \"Test User\",\r\n  \"email\": \"testuser@gmail.com\",\r\n  \"phone\": \"9876543210\",\r\n  \"message\": \"This is a test message\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://vernanbackend.ezlab.in/api/contact-us/",
					"protocol": "https",
					"host": [
						"vernanbackend",
						"ezlab",
						"in"
					],
					"path": [
						"api",
						"contact-us",
						""
					]
				}
			},
			"response": []
		}
	]
}
