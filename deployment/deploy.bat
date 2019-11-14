CALL run bring-down-server.sh
SET DIR=%cd%
CALL build-front-end
CD %DIR%
CALL copy-front-end
CALL copy-back-end
CALL run start-server.sh