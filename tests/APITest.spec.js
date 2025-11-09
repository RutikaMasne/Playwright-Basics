const {test, expect} = require('@playwright/test');

test("GET Users", async ({request}) => {
    const response = await request.get("https://reqres.in/api/users?page=2")
    console.log(await response.json());
    expect(response.status()).toBe(200);
});

// Use test.describe to group tests and run them in order
test.describe.serial("API Test Suite", () => {
    let userId;
    
    test("Create User", async ({ request }) => {
      const response = await request.post("https://reqres.in/api/users", {
        data: { name: "Rutika", job: "Trainee" },
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });
    
      console.log("Status code:", response.status());
      const res = await response.json();
      console.log("Response:", res);
    
      expect(response.status()).toBe(201);
      expect(res).toHaveProperty("id");
      userId = res.id; // Save the user ID for the next tests
    });
    
    test("Update User", async ({request}) => {
        // Ensure userId was created before running this test
        expect(userId, "Create User test must pass and return a userId").not.toBeUndefined();
        const response = await request.put(`https://reqres.in/api/users/${userId}`, {
            data: {
                name: "Rutika Updated",
                job: "Senior Trainee"
            },
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        console.log(await response.json());
        expect(response.status()).toBe(200);
    });
    
    test("Delete User", async ({request}) => {
        expect(userId, "Create User test must pass and return a userId").not.toBeUndefined();
        const response = await request.delete(`https://reqres.in/api/users/${userId}`);
        expect(response.status()).toBe(204);
    });
});
