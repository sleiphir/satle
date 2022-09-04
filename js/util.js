
/**
 * Shuffle an array
 */
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

let satlesJson = "WwogICAgewogICAgICAgICJpZCI6IDEsCiAgICAgICAgImNpdHkiOiAiRmxvcmVuY2UiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiA0My43NzQ2MDQ1LAogICAgICAgICAgICAibG5nIjogMTEuMjQ5MjM2MQogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogMiwKICAgICAgICAiY2l0eSI6ICJEdWJhaSIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDI1LjE5NzMzNzUsCiAgICAgICAgICAgICJsbmciOiA1NS4yNzQxMjY4CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiAzLAogICAgICAgICJjaXR5IjogIkVkaW5idXJnaCIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDU1Ljk0ODU2OTIsCiAgICAgICAgICAgICJsbmciOiAtMy4xOTk5OTE2CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiA0LAogICAgICAgICJjaXR5IjogIkplcnVzYWxlbSIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDMxLjc3ODAxNzIsCiAgICAgICAgICAgICJsbmciOiAzNS4yMzUwNTcKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDUsCiAgICAgICAgImNpdHkiOiAiU2luZ2Fwb3JlIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogMS4yODYzMTIyLAogICAgICAgICAgICAibG5nIjogMTAzLjg1OTE4NTIKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDYsCiAgICAgICAgImNpdHkiOiAiV2Fyc2F3IiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogNTIuMTY1MTU4NCwKICAgICAgICAgICAgImxuZyI6IDIxLjA5MDQzNTYKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDcsCiAgICAgICAgImNpdHkiOiAiT3Nha2EiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiAzNC42NTI2NTg0LAogICAgICAgICAgICAibG5nIjogMTM1LjUwNjIzMjIKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDgsCiAgICAgICAgImNpdHkiOiAiTG9uZG9uIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogNTEuNTAwODI4MywKICAgICAgICAgICAgImxuZyI6IC0wLjE0Mjk0NDMKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDksCiAgICAgICAgImNpdHkiOiAiVHVuaXMiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiAzNi43OTcwOTc0LAogICAgICAgICAgICAibG5nIjogMTAuMTcxMjIwNQogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogMTAsCiAgICAgICAgImNpdHkiOiAiUHJhZ3VlIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogNTAuMDg3MDM4NywKICAgICAgICAgICAgImxuZyI6IDE0LjQyMDYxODUKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDExLAogICAgICAgICJjaXR5IjogIlNlb3VsIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogMzcuNTc5NTQ3MiwKICAgICAgICAgICAgImxuZyI6IDEyNi45NzcxMTcxCiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiAxMiwKICAgICAgICAiY2l0eSI6ICJTYW4gRnJhbmNpc2NvIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogMzcuODAyMTA5OSwKICAgICAgICAgICAgImxuZyI6IC0xMjIuNDE4ODg4MQogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogMTMsCiAgICAgICAgImNpdHkiOiAiVmljdG9yaWEiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiA0OC40MTk1MDAyLAogICAgICAgICAgICAibG5nIjogLTEyMy4zNzAxNjcyCiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiAxNCwKICAgICAgICAiY2l0eSI6ICJNdW1iYWkiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiAxOC45Mzk4NTE3LAogICAgICAgICAgICAibG5nIjogNzIuODM1MTM5CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiAxNSwKICAgICAgICAiY2l0eSI6ICJCZWlqaW5nIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogMzkuOTE2OTc4LAogICAgICAgICAgICAibG5nIjogMTE2LjM5MDQwMgogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogMTYsCiAgICAgICAgImNpdHkiOiAiQm9zdG9uIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogNDIuMzYwMjQ1MSwKICAgICAgICAgICAgImxuZyI6IC03MS4wNTQ5MzQ4CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiAxNywKICAgICAgICAiY2l0eSI6ICJMaW1hIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogLTEyLjA0NTk3NjcsCiAgICAgICAgICAgICJsbmciOiAtNzcuMDMwNjU0MQogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogMTgsCiAgICAgICAgImNpdHkiOiAiU3lkbmV5IiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogLTMzLjg1Njg3MTIsCiAgICAgICAgICAgICJsbmciOiAxNTEuMjE1MTAxNQogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogMTksCiAgICAgICAgImNpdHkiOiAiU3RvY2tob2xtIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogNTkuMzI4MDMzNCwKICAgICAgICAgICAgImxuZyI6IDE4LjA5MTQ0ODQKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDIwLAogICAgICAgICJjaXR5IjogIlNhbyBQYXVsbyIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IC0yMy41NjE0NzQ5LAogICAgICAgICAgICAibG5nIjogLTQ2LjY1NjAwODgKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDIxLAogICAgICAgICJjaXR5IjogIk1vbnRldmlkZW8iLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiAtMzQuOTA2NTI1NCwKICAgICAgICAgICAgImxuZyI6IC01Ni4xOTk4NjI5CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiAyMiwKICAgICAgICAiY2l0eSI6ICJQYXJpcyIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDQ4Ljg3MzcxMjUsCiAgICAgICAgICAgICJsbmciOiAyLjI5NDg4MDUKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDIzLAogICAgICAgICJjaXR5IjogIk11bmljaCIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDQ4LjEzNzI1MDgsCiAgICAgICAgICAgICJsbmciOiAxMS41NzUzODI3CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiAyNCwKICAgICAgICAiY2l0eSI6ICJUb2t5byIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDM1LjY4NTEyOTEsCiAgICAgICAgICAgICJsbmciOiAxMzkuNzUyNjc2MgogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogMjUsCiAgICAgICAgImNpdHkiOiAiQnVlbm9zIEFpcmVzIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogLTM0LjYwMzc5MzgsCiAgICAgICAgICAgICJsbmciOiAtNTguMzgxNjMxOAogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogMjYsCiAgICAgICAgImNpdHkiOiAiSmFrYXJ0YSIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IC02LjE3NTM5NDMsCiAgICAgICAgICAgICJsbmciOiAxMDYuODI2OTY0OQogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogMjcsCiAgICAgICAgImNpdHkiOiAiQ29wZW5oYWdlbiIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDU1LjY4MTQwMjcsCiAgICAgICAgICAgICJsbmciOiAxMi41NzU3NDA0CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiAyOCwKICAgICAgICAiY2l0eSI6ICJNYXJyYWtlc2giLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiAzMS42NDI2MzEzLAogICAgICAgICAgICAibG5nIjogLTguMDAzMzEwOQogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogMjksCiAgICAgICAgImNpdHkiOiAiQXRoZW5zIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogMzcuOTcxNDM1MSwKICAgICAgICAgICAgImxuZyI6IDIzLjcyNjU0MDEKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDMwLAogICAgICAgICJjaXR5IjogIkJlcmxpbiIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDUyLjUxNjI2NTIsCiAgICAgICAgICAgICJsbmciOiAxMy4zNzc2MDk3CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiAzMSwKICAgICAgICAiY2l0eSI6ICJWaWVubmEiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiA0OC4xODQ4NzQ3LAogICAgICAgICAgICAibG5nIjogMTYuMzExOTE1NwogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogMzIsCiAgICAgICAgImNpdHkiOiAiRHVibGluIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogNTMuMzQzMTYzOSwKICAgICAgICAgICAgImxuZyI6IC02LjI2Nzg3NTkKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDMzLAogICAgICAgICJjaXR5IjogIk1pbGFuIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogNDUuNDY0MjQ1OCwKICAgICAgICAgICAgImxuZyI6IDkuMTkxMzM0NwogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogMzQsCiAgICAgICAgImNpdHkiOiAiQ2FwZSBUb3duIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogLTMzLjkyNTg1MDcsCiAgICAgICAgICAgICJsbmciOiAxOC40MjcyNzIKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDM1LAogICAgICAgICJjaXR5IjogIk1lY2NhIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogMjEuNDIyNDc0LAogICAgICAgICAgICAibG5nIjogMzkuODI2MDk2CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiAzNiwKICAgICAgICAiY2l0eSI6ICJSb21lIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogNDEuODk3NTk5MiwKICAgICAgICAgICAgImxuZyI6IDEyLjQ5ODI5NAogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogMzcsCiAgICAgICAgImNpdHkiOiAiQW1zdGVyZGFtIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogNTIuMzU5ODgzMiwKICAgICAgICAgICAgImxuZyI6IDQuODg0ODkzCiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiAzOCwKICAgICAgICAiY2l0eSI6ICJMYWdvcyIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDYuNDc2MzI2LAogICAgICAgICAgICAibG5nIjogMy4zNjkzNTY0CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiAzOSwKICAgICAgICAiY2l0eSI6ICJTYW50aWFnbyIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IC0zMy40NDAyNDI1LAogICAgICAgICAgICAibG5nIjogLTcwLjY0MzU1MDQKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDQwLAogICAgICAgICJjaXR5IjogIlp1cmljaCIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDQ3LjM3MDEzNDIsCiAgICAgICAgICAgICJsbmciOiA4LjU0NDA2MTMKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDQxLAogICAgICAgICJjaXR5IjogIk1vc2NvdyIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDU1Ljc1Mzg4NjIsCiAgICAgICAgICAgICJsbmciOiAzNy42MTk4ODc2CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiA0MiwKICAgICAgICAiY2l0eSI6ICJLdWFsYSBMdW1wdXIiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiAzLjE1ODM4MTUsCiAgICAgICAgICAgICJsbmciOiAxMDEuNzExNzgwMwogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogNDMsCiAgICAgICAgImNpdHkiOiAiTW9udHJlYWwiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiA0NS41MDM3NDIxLAogICAgICAgICAgICAibG5nIjogLTczLjU4NzUxNzMKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDQ0LAogICAgICAgICJjaXR5IjogIkJhbmdrb2siLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiAxMy43NTE3MzIyLAogICAgICAgICAgICAibG5nIjogMTAwLjQ5MjM4MDgKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDQ1LAogICAgICAgICJjaXR5IjogIkxpc2JvbiIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDM4LjY5MTYzNTgsCiAgICAgICAgICAgICJsbmciOiAtOS4yMTYwMDY1CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiA0NiwKICAgICAgICAiY2l0eSI6ICJCb2dvdGEiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiA0LjYwMjUxNzcsCiAgICAgICAgICAgICJsbmciOiAtNzQuMDYzMDE5MQogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogNDcsCiAgICAgICAgImNpdHkiOiAiTGFzIFZlZ2FzIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogMzYuMTEyOTE1MiwKICAgICAgICAgICAgImxuZyI6IC0xMTUuMTc0Njg2NAogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogNDgsCiAgICAgICAgImNpdHkiOiAiQnJ1c3NlbHMiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiA1MC44NDQ5OTExLAogICAgICAgICAgICAibG5nIjogNC4zNDk4NzM0CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiA0OSwKICAgICAgICAiY2l0eSI6ICJCdWRhcGVzdCIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDQ3LjUxNDkyOTgsCiAgICAgICAgICAgICJsbmciOiAxOS4wNzc1ODIyCiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiA1MCwKICAgICAgICAiY2l0eSI6ICJKb2hhbm5lc2J1cmciLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiAtMjYuMjM3NzIzLAogICAgICAgICAgICAibG5nIjogMjguMDA4MDcyMgogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogNTEsCiAgICAgICAgImNpdHkiOiAiTG9zIEFuZ2VsZXMiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiAzNC4wMDg1OTA4LAogICAgICAgICAgICAibG5nIjogLTExOC40OTgwOTI0CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiA1MiwKICAgICAgICAiY2l0eSI6ICJNYWNhdSIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDIyLjE0ODM2ODIsCiAgICAgICAgICAgICJsbmciOiAxMTMuNTYwODY3MQogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogNTMsCiAgICAgICAgImNpdHkiOiAiUGFuYW1hIENpdHkiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiA4Ljk2ODgzMDcsCiAgICAgICAgICAgICJsbmciOiAtNzkuNTMxMTE4NQogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogNTQsCiAgICAgICAgImNpdHkiOiAiVG9yb250byIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDQzLjY0MzU3OTgsCiAgICAgICAgICAgICJsbmciOiAtNzkuMzg2NjY5OAogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogNTUsCiAgICAgICAgImNpdHkiOiAiTWFkcmlkIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogNDAuNDEzNTg1NCwKICAgICAgICAgICAgImxuZyI6IC0zLjY4MjEzMgogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogNTYsCiAgICAgICAgImNpdHkiOiAiVmVuaWNlIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogNDUuNDM4MDczMSwKICAgICAgICAgICAgImxuZyI6IDEyLjMzNTgxMzIKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDU3LAogICAgICAgICJjaXR5IjogIlJpbyBEZSBKYW5laXJvIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogLTIyLjk1MjQyMjgsCiAgICAgICAgICAgICJsbmciOiAtNDMuMjEwNjMzOQogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogNTgsCiAgICAgICAgImNpdHkiOiAiSG91c3RvbiIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDI5LjU1MjA1OTgsCiAgICAgICAgICAgICJsbmciOiAtOTUuMDk3MzczNgogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogNTksCiAgICAgICAgImNpdHkiOiAiQmVpcnV0IiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogMzMuODk1MzIxOSwKICAgICAgICAgICAgImxuZyI6IDM1LjUwNTg0ODIKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDYwLAogICAgICAgICJjaXR5IjogIkhvbm9sdWx1IiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogMjEuMjgxNTYxLAogICAgICAgICAgICAibG5nIjogLTE1Ny44Mzc5NjcxCiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiA2MSwKICAgICAgICAiY2l0eSI6ICJJc3RhbmJ1bCIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDQxLjAwNTI0MzMsCiAgICAgICAgICAgICJsbmciOiAyOC45NzY3NDYyCiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiA2MiwKICAgICAgICAiY2l0eSI6ICJDYWlybyIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDMwLjAyODkwODUsCiAgICAgICAgICAgICJsbmciOiAzMS4yNTk4NTIzCiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiA2MywKICAgICAgICAiY2l0eSI6ICJDZWJ1IENpdHkiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiAxMC4zMzQzNzM4LAogICAgICAgICAgICAibG5nIjogMTIzLjg4Nzc3NzcKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDY0LAogICAgICAgICJjaXR5IjogIk1lbGJvdXJuZSIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IC0zNy44MzA0Nzc1LAogICAgICAgICAgICAibG5nIjogMTQ0Ljk3MzA3MzUKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDY1LAogICAgICAgICJjaXR5IjogIk1leGljbyBDaXR5IiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogMTkuNDI3MDAzNywKICAgICAgICAgICAgImxuZyI6IC05OS4xNjc5NjE0CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiA2NiwKICAgICAgICAiY2l0eSI6ICJCYXJjZWxvbmEiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiA0MS40MDM2ODY4LAogICAgICAgICAgICAibG5nIjogMi4xNzQxMzc2CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiA2NywKICAgICAgICAiY2l0eSI6ICJDaGljYWdvIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogNDEuODgyNzI5MywKICAgICAgICAgICAgImxuZyI6IC04Ny42MjMzNzQ5CiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAiaWQiOiA2OCwKICAgICAgICAiY2l0eSI6ICJUZWhyYW4iLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiAzNS42OTk3MzkyLAogICAgICAgICAgICAibG5nIjogNTEuMzM3OTk0NgogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogNjksCiAgICAgICAgImNpdHkiOiAiSGFub2kiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiAyMS4wMjkyMDM5LAogICAgICAgICAgICAibG5nIjogMTA1LjgzNjAzNjEKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDcwLAogICAgICAgICJjaXR5IjogIlZhbmNvdXZlciIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDQ5LjI4ODc3MjQsCiAgICAgICAgICAgICJsbmciOiAtMTIzLjExMTMyNTgKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDcxLAogICAgICAgICJjaXR5IjogIk5ldyBEZWhsaSIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDI4LjYxMjg4MywKICAgICAgICAgICAgImxuZyI6IDc3LjIyOTM4MjcKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJpZCI6IDcyLAogICAgICAgICJjaXR5IjogIkhvbmcgS29uZyIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDIyLjMwNjQ5NzIsCiAgICAgICAgICAgICJsbmciOiAxMTQuMTY5OTI3NgogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogNzMsCiAgICAgICAgImNpdHkiOiAiVGFpcGVpIiwKICAgICAgICAibG9jIjogewogICAgICAgICAgICAibGF0IjogMjUuMDM0ODg0LAogICAgICAgICAgICAibG5nIjogMTIxLjUyMTQ0OQogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogNzQsCiAgICAgICAgImNpdHkiOiAiTmV3IFlvcmsiLAogICAgICAgICJsb2MiOiB7CiAgICAgICAgICAgICJsYXQiOiA0MC43NDkxNjgsCiAgICAgICAgICAgICJsbmciOiAtNzMuOTY3NDc4MQogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImlkIjogNzUsCiAgICAgICAgImNpdHkiOiAiSG8gQ2hpIE1pbmggQ2l0eSIsCiAgICAgICAgImxvYyI6IHsKICAgICAgICAgICAgImxhdCI6IDEwLjc3NzA0MzksCiAgICAgICAgICAgICJsbmciOiAxMDYuNjk1MDk5NwogICAgICAgIH0KICAgIH0KXQ==";

function populateSatles() {
    return JSON.parse(atob(satlesJson));
}

$(document).ready(function() {
    /**
     * Get the width of an element not present in the DOM.
     */
    $.fn.getHiddenWidth = function () {
        // save a reference to a cloned element that can be measured
        let $hiddenElement = $(this).clone().appendTo('body');
        // calculate the width of the clone
        let width = $hiddenElement.width();
        // remove the clone from the DOM
        $hiddenElement.remove();
        return width;
    };

});
