import synthtool as s
import synthtool.gcp as gcp
import synthtool.languages.node as node
import logging

logging.basicConfig(level=logging.DEBUG)

AUTOSYNTH_MULTIPLE_COMMITS = True


gapic = gcp.GAPICMicrogenerator()
# tasks has two product names, and a poorly named artman yaml
for version in ['v1', 'v1beta2']:
    library = gapic.typescript_library(
        'language',
        generator_args={
            "grpc-service-config": f"google/cloud/language/{version}/language_grpc_service_config.json",
            "package-name":f"@google-cloud/language"
            },
        proto_path=f'/google/cloud/language/{version}',
        version=version)

    # skip index, protos, package.json, and README.md
    s.copy(
        library,
        excludes=['package.json', 'README.md', 'src/index.ts'])

# Update common templates
common_templates = gcp.CommonTemplates()
templates = common_templates.node_library(source_location='build/src')
s.copy(templates)

node.postprocess_gapic_library()
