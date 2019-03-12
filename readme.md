to start docker

'''bash
docker run --rm -it --publish 127.0.0.20:8080:8080 -p 127.0.0.20:8081:8
081 -v ${pwd}:/home/data webserver
'''