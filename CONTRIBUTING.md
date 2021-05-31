Contributing
============

Setup
-----

Get the project with:

```bash
git clone git@github.com:epfl-si/epfl-email-templates.git
cd epfl-email-templates
```

Build
-----

```
docker-compose up build
```

Run
---

```
docker-compose up serve
```

This will start a server on http://localhost:8200

Send
----

Create a `.env` file in the project with the following:

```dotenv
MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASSWORD=
```

Then, configure and run the file: `bin/send-email.js`.

Release
-------

1. Bump the correct version
1. Update the file [CHANGELOG.md](CHANGELOG.md)
1. Create and push the tag  
   `git tag -a v<version> -m "epfl-email-templates v<version> release"`  
   `git push origin main --tags`
