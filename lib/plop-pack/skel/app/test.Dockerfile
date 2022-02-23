FROM cypress/included:9.5.0

RUN mv /root/.cache /home/node/.cache
ENV CYPRESS_CACHE_FOLDER=/home/node/.cache/Cypress

COPY package.json fixtures/* /cypress/fixtures/
RUN echo '{ "pluginsFile": false }' > '/cypress.json' && \
    rm /cypress/fixtures/package.json
COPY feat/ /cypress/integration/

USER node
ENV CYPRESS_BASE_URL="http://localhost:8080" \
    CYPRESS_PROJECT_ID="" \
    CYPRESS_RECORD_KEY=""
